# vite 设置别名

```json{6-10}
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
      "paths": {
        "@/*": [
         "./src/*"
       ],
     }
  }
}
```

```typescript{9-13}
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
```

然后可以在webstorm上面使用别名和代码提示了

![image](https://media.sunpm.me/uPic/2022-08-17/09:56:10-xBiVpr_image.png)
