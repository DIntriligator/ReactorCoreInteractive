shader_type canvas_item;

uniform float speed : hint_range(0.0, 4.0) = 0.7;
uniform float block_size_px : hint_range(1.0, 8.0) = 2.0;
uniform float drift_strength_px : hint_range(0.0, 3.0) = 0.7;
uniform float horizontal_flow_px : hint_range(-2.0, 2.0) = 0.25;
uniform float vertical_flow_px : hint_range(-2.0, 2.0) = 0.08;
uniform float seed : hint_range(0.0, 1000.0) = 17.0;

float hash12(vec2 p) {
	p = fract(p * vec2(123.34, 345.45));
	p += dot(p, p + 34.345);
	return fract(p.x * p.y);
}

void fragment() {
	vec2 tex_size = vec2(textureSize(TEXTURE, 0));
	vec2 px = UV * tex_size;
	float t = TIME * speed;

	// Group pixels into small blocks so the sprite keeps its chunky pixel-art look.
	vec2 block_id = floor(px / block_size_px);
	vec2 block_center_px = (block_id + 0.5) * block_size_px;

	// Slow, pseudo-random drift direction per block (changes over time).
	float phase = floor(t * 5.0);
	float a = hash12(block_id + vec2(seed, phase)) * 6.2831853;
	vec2 random_dir = vec2(cos(a), sin(a));

	// Gentle banded flow so the motion feels gaseous instead of noisy.
	float band = sin((block_id.y * 0.35) + t * 1.4);
	vec2 band_flow = vec2(horizontal_flow_px * band, vertical_flow_px * sin(block_id.x * 0.41 + t));

	vec2 drift_px = (random_dir * drift_strength_px) + band_flow;
	vec2 sample_px = block_center_px + drift_px;

	// Keep sampling locked to pixel centers to avoid blurring.
	sample_px = floor(sample_px) + 0.5;
	vec2 sample_uv = clamp(sample_px / tex_size, vec2(0.0), vec2(1.0));

	COLOR = texture(TEXTURE, sample_uv) * COLOR;
}
