import process from 'node:process'
import dotenv from 'dotenv'
import type { EvConfig } from '@/types'

dotenv.config()

function parseBoolean(value: string): boolean | string {
  if (value === 'false') {
    return false
  }
  if (value === 'true') {
    return true
  }
  return value
}

export const evConfig: EvConfig = {
  log: process.env.isLog ?? false, // 是否写入日志 默认为false
  storeDirs: process.env.storeDir ?? '', // 文件存储目录 默认为当前目录
  cookie: process.env.cookie ?? '', // 掘金账户cookie 若爬取的小册为免费小册，则不需要cookie 若爬取小册为已购买小册，则需要cookie。 如果你想爬那些付费且没购买的小册，那直接退出吧，这个项目不支持
  course: process.env.course ?? '', // 掘金小册地址 必传
  spiderAll: process.env.spiderAll ? parseBoolean(process.env.spiderAll) : false, // 是否爬所有已购买小册 默认为false
  headless: process.env.headless ? parseBoolean(process.env.headless) : true, // 是否开启无头模式 默认为true
  filetype: process.env.filetype || 'md', // 保存文件格式 默认为md
  puppeteerOptions: {}, // puppeteer配置项  默认为空 文档参考 https://pptr.dev/browsers-api/browsers.launchoptions/
}
