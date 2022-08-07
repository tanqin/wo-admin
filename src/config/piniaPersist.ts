import { PersistOptions } from 'pinia-plugin-persist'

// pinia 数据持久化参数配置
const piniaPersist = (key: string) => {
  const persist: PersistOptions = {
    enabled: true,
    strategies: [
      {
        key,
        storage: localStorage
      }
    ]
  }
  return persist
}

export default piniaPersist
