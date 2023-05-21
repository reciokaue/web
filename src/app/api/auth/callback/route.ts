import { api } from '@/services/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const redirectTo = request.cookies.get('redirectTo')?.value

  try {
    const registerResponse = await api.post('/register', {
      code,
    })

    const { token } = registerResponse.data
    const redirectUrl = redirectTo ?? new URL('/', request.url)

    return NextResponse.redirect(redirectUrl, {
      headers: {
        'Set-Cookie': `token=${token}; Path=/; max-age=${60 * 60 * 24 * 30}`,
      },
    })
  } catch (error) {
    console.log(error)
    return NextResponse.next()
  }
}
