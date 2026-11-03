# Scene and hands replay

Published at https://xiaobenli00.github.io/projects/scene-hands/.

Static YEngine/Three.js room and hand replay with six synchronized whole-frame fisheye previews. The final two seconds are excluded; playback ends at101.399025s. The unsupported extra headrest on the opening chair has been removed after source-image review.

Phones load smaller videos and a lighter dense mesh automatically. Videos use web compression and resizing, with no crop, rectification, rotation or annotations. Hand reconstruction includes image-constrained and short-gap estimates, not measured3D ground truth.

This built static application uses relative URLs and needs no localhost server or machine-specific files. Serve this folder over HTTP(S). Original capture and model-weight files are not distributed here.

Third-party notices are in `licenses/`. YEngine Room SDK0.1.1: https://github.com/Endless-AI-Lab/YEngine-Releases.
