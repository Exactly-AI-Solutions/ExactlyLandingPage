import React, { Fragment } from 'react'
import { ReactNode } from 'react'
import { getImageUrl } from './getImageUrl'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import { IContentBlock } from '@/types/Post'

export const parseRichText = (content: IContentBlock[]): ReactNode => {
  return content.map((block, index) => {
    switch (block.type) {
      case 'heading':
        return React.createElement(
          `h${block.level}`,
          { key: index },
          block.children.map(({ text }) => text).join(' ')
        )
      case 'paragraph':
        return (
          <Fragment key={index}>
            {block.children.map(
              ({ text, bold, italic, strikethrough, type, url }) => {
                if (type === 'link' && url) {
                  return <Link href={url}>{text}</Link>
                }
                return (
                  <p
                    className={clsx(
                      bold ? 'font-bold' : 'font-normal',
                      italic ? 'italic' : '',
                      strikethrough ? 'line-through' : ''
                    )}
                  >
                    {text}
                  </p>
                )
              }
            )}
          </Fragment>
        )
      case 'image':
        return (
          <Image
            key={index}
            src={getImageUrl(block.image?.formats.medium.url || '')}
            alt={block.image?.alternativeText || ''}
            width={block.image?.formats?.medium?.width || 600}
            height={block.image?.formats?.medium?.height || 400}
          />
        )
      case 'quote':
        return (
          <blockquote key={index}>
            {block.children.map(({ text }) => text).join(' ')}
          </blockquote>
        )
      case 'list': {
        if (block.format === 'unordered') {
          return (
            <ul key={index} className="pl-4 list-disc">
              {block.children.map((item, i) => (
                <li key={i}>
                  {item.children?.map(({ text }) => text).join(' ')}
                </li>
              ))}
            </ul>
          )
        }
        if (block.format === 'ordered') {
          return (
            <ol key={index} className="pl-4 list-decimal">
              {block.children.map((item, i) => (
                <li key={i}>
                  {item.children?.map(({ text }) => text).join(' ')}
                </li>
              ))}
            </ol>
          )
        }
      }
      default:
        return null
    }
  })
}
