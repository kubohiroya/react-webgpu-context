# react-webgpu-context
React context and hook to use WebGPU with customizable loading and not supported messages.

## Installation
```bash
  pnpm install react-webgpu-context
```

### App.tsx
```tsx
import { WebGPUDeviceContextProvider } from 'react-webgpu-context';
import {MyWebGPUApp} from './MyWebGpuApp'
export const App = ()=>{
  return (
    <WebGPUDeviceContextProvider
      loadingMessage={(<p>Loading...</p>)}
      notSupportedMessage={(<p>WebGPU is not supported on this browser.</p>)}>
      <MyWebGPUApp />
    </WebGPUDeviceContextProvider>
  );
}
```

### MyWebGpuApp.tsx
```tsx
import { useWebGPUDevice } from 'react-webgpu-context';

export const MyWebGPUApp = ()=>{
  const device: GPUDevice = useWebGPUDevice();
  // use device to create render pipeline, buffers, etc.
}
```
## Author
- [Hiroya Kubo](https://github.com/kubohiroya)
 
## License
MIT
```