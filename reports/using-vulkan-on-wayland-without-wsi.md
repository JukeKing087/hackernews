# Using Vulkan on Wayland Without WSI

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ibobev](https://news.ycombinator.com/user?id=ibobev) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50298227) |
| **Posted** | Fri, 30 Oct 2026 00:21:08 GMT |

## Link
https://ptrtoliam.dev/blog/vkwayland/

## Article Preview
Using Vulkan on Wayland Without WSI | ptrToLiam ptrToLiam Skip to main content Menu blog tags Using Vulkan on Wayland Without WSI 2026.10.15 :: 19 min read # wayland # linux # graphics # vulkan # gpu-compute Contents Building on the Previous Post What Needs To Change? Accessing the GPU Accepting libc... For Now Using Vulkan Without WSI Presenting VkImages to the Compositor Device Selection &amp; Image Formats Device Selection Image Formats: DRM vs Vulkan Allocating Exportable Images In Vulkan Producing wl_buffer Handles Via linux-dmabuf Rendering A Frame Presenting Our Exported Frames Potential Issues What&#x27;s Left In my previous post I covered the process of putting a software-rendered window on-screen in a Wayland client program without the use of libwayland. While that is a good starting point, for more performance-minded programs we'd typically want to be able to use the GPU for rendering. That is the subject of this post: using the GPU to render our libwayland-free Wayland clie

---
_Auto-generated · Fri, 30 Oct 2026 00:23:46 GMT_
