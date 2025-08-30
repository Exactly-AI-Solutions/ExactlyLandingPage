import { parseRichText } from '@/services/parseRichText'
import { IContentBlock } from '@/types/Post'

export const ContentParser = ({ content }: { content: IContentBlock[] }) => (
  <div className="content-parser">{parseRichText(content)}</div>
)
