```json{6-11}
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

```typescript{25-29}
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



![image](https://upic.fassr.com/uPic/2022-08-17/09:56:10-xBiVpr_image.png)
