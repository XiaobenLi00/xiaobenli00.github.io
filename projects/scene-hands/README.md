# Scene and hands replay

Capture: DAS-Ego_20261028090054_none_none_7a0d34_c3eee1fe.

Default view overlays the reused dense room with the editable structure's wireframe. Editable refrigerator and microwave doors follow reviewed event timing from this new capture. Panorama and device views switch in the main 3D panel. Six synchronized fisheye previews and an enlarged original Camera 2 fisheye view share the replay clock.

Playback ends at 102.071906s. The final two seconds are physically excluded from the distributed videos, trajectory and hand samples because the near-lens hand poses are underconstrained. The original capture is preserved privately. Boundary poses before VIO initialization use explicitly held estimates.

Phones load smaller videos and a lighter dense mesh. Videos preserve the whole original fisheye image with resize/compression only: no crop, warp, rectification, rotation or annotations. Hand reconstruction contains image-constrained and marked prior estimates; neither hand poses nor the approximate door angles are measured 3D ground truth. The reused dense room remains static while the editable doors move.

Runtime assets use relative URLs and need no local machine files. Serve this directory over HTTP(S). Original MCAPs, model weights, private processing logs and source imagery are not distributed. Capture-specific runtime data and videos use the 20261028090054 subdirectory.

Third-party notices are in `licenses/`. YEngine Room SDK 0.1.1: https://github.com/Endless-AI-Lab/YEngine-Releases.
