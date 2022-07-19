## 为什么需要pnpm？

1. npm 和yarn存在什么问题?
    - 对等依赖问题/并行依赖问题
    - 重复安装问题

2. pnpm是如何解决这些问题的?
    - global store hard link
    - node_modules symbol link  
        - .pnpm
    
## pnpm 怎么做到速度快？
