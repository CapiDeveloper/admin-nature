'use client'

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const urls = [
    { opcion: 'Inicio', path:'/dashboard' },
    { opcion: 'Registrar', path:'/dashboard/registrar-tour' },
    { opcion: 'Historial', path:'/dashboard/historial' }

];

export const Menu = () => {

  const pathName = usePathname();
  const router = useRouter()
    
  return (
    <>
        <header>
            <nav>
                <ul className="flex justify-end items-center gap-5 mr-5 my-5">
                    {
                        urls.map((url,index)=>(
                            <li key={index}>
                                <Link 
                                className={ clsx('font-semibold p-2 rounded',{
                                    'bg-blue-600 text-white': url.path == pathName
                                }) }
                                href={url.path}>{url.opcion}</Link>
                            </li>
                        ))
                    }
                    <button onClick={ ()=>router.push('/') } className='font-semibold p-2 rounded bg-red-700 text-white' type='button'> Cerrar Sesión</button>
                </ul>
            </nav>
        </header>
    </>
  )
}
