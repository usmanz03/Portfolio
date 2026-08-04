import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: '#faf7f2',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#c1521f',
          fontWeight: 'bold',
          fontFamily: 'serif',
          border: '3px solid #e4ddd0',
          borderRadius: '20px',
        }}
      >
        UZ
      </div>
    ),
    {
      ...size,
    }
  )
}
