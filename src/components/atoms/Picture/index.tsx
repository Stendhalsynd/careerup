// TODO: storybook 작성
'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { Box } from 'components/layout/index.ts'

export type PictureProps = {
  pictureName?: string
  width?: number
  height?: number
}

const PictureWrapper = styled(Box)``

const PictureComponent = styled(Image)<PictureProps>``

/**
 * 이미지 컴포넌트
 * @description 이미지
 * pictureName: /assets/image/image_{pictureName}.svg
 * width, height: Integer만 작성
 * next.js에서 제공하는 Image 태그에는 src, alt, width, height 속성이 필수적으로 명시되어 있어야 한다.
 * Type
 * src: String
 * width: Integer(px)
 * height: Integer(px)
 * alt: string
 * @example <Picture
        pictureName="cube"
        width={24}
        height={24}
      />
 */

const Picture = (props: PictureProps) => {
  const { pictureName, width = 100 } = props
  const picturePath = `/assets/image/img_${pictureName}.svg`

  return (
    <PictureWrapper>
      <PictureComponent
        src={picturePath}
        alt={`${pictureName} image`}
        width={0}
        height={0}
        style={{ width, height: 'auto' }}
        priority
      />
    </PictureWrapper>
  )
}

export default Picture
