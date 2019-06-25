import defaultSettings from '@/settings'

const title = defaultSettings.title || '压裂措施效果大数据综合分析平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
