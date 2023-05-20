import Image from 'next/image'
import { getUser } from '@/services/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="text-le flex items-center gap-3">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt="Imagem do usuário"
        className="flex h-10 w-10  rounded-full"
      />
      <p className="max-w-[150px] text-sm leading-snug">
        {name}
        <a className="block text-red-300 hover:text-red-400" href="">
          Quero sair
        </a>
      </p>
    </div>
  )
}
