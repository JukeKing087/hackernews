# Sysctl settings for RDMA pods in K8s

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [asaiacai](https://news.ycombinator.com/user?id=asaiacai) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50357029) |
| **Posted** | Tue, 03 Nov 2026 19:34:24 GMT |

## Link
https://oguzpastirmaci.com/posts/arp-rp-filter-and-accept-ra-for-rdma-pods-on-kubernetes/

## Article Preview
ARP, rp_filter and accept_ra for RDMA Pods on Kubernetes :: Under the Model Under the Model Menu&nbsp;▾ About LinkedIn GitHub About LinkedIn GitHub ARP, rp_filter and accept_ra for RDMA Pods on Kubernetes 2026-11-01 # rdma &nbsp; # roce &nbsp; # kubernetes &nbsp; # sr-iov &nbsp; # dranet &nbsp; # ipv6 &nbsp; A GPU node with 16 RoCE rails has 16 network interfaces, often in one subnet. Linux treats an IP address as owned by the host, not by an interface. That default is fine for one NIC. With 16 rails, it breaks RDMA in ways that look like RDMA bugs. These are some of the failures I saw: ib_write_bw failed on 6 of 16 rails, and the failing rails changed between runs. Two peer addresses resolved to the same MAC address. One of them got the MAC of a VF on another rail. NCCL stopped with ibv_modify_qp failed with 61 No data available , because most rails had no IPv6 address. The fix is always a few sysctls. The hard part on Kubernetes is where they live. A pod can get its RDMA interface in

---
_Auto-generated · Tue, 03 Nov 2026 19:43:07 GMT_
