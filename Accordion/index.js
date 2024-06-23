'use client'

import { FaMinus, FaPlus } from 'react-icons/fa'
import { useState } from 'react'
import { cn } from '@/app/_helpers/util'

const qaData = [
  {
    question: 'Çfarë duhet të dini për Kuvendin e Shqipërisë?',
    answer:
      'Në një shtet demokratik pushteti buron nga populli. Deputetët, si përfaqësuesit e zgjedhur prej tij formojnë/ përbëjnë Kuvendin, i cili ushtron pushtetin ligjvënës, kontrollues dhe përfaqësues. Deputetët kanë përgjegjësinë të përfaqësojnë opinionin e zgjedhësve të tyre gjatë vendimmarrjes dhe debatit parlamentar që të shprehin interesat e zgjedhësve gjatë punimeve të Kuvendit. <br/><br/>Kuvendi i Republikës së Shqipërisë është parlament një dhomësh i përbërë nga 140 deputetë, të zgjedhur për një periudhë 4 vjeçare. Kuvendi i zhvillon punimet e tij vjetore në dy sesione. Ai e organizon veprimtarinë e tij nëpërmjet Rregullores së Kuvendit, akt normativ që miratohet me shumicën e të gjithë anëtarëve të Kuvendit.',
  },
  {
    question: 'Historiku i Kuvendit të Shqipërisë?',
    answer:
      'Në një shtet demokratik pushteti buron nga populli. Deputetët, si përfaqësuesit e zgjedhur prej tij formojnë/ përbëjnë Kuvendin, i cili ushtron pushtetin ligjvënës, kontrollues dhe përfaqësues. Deputetët kanë përgjegjësinë të përfaqësojnë opinionin e zgjedhësve të tyre gjatë vendimmarrjes dhe debatit parlamentar që të shprehin interesat e zgjedhësve gjatë punimeve të Kuvendit. Kuvendi i Republikës së Shqipërisë është parlament një dhomësh i përbërë nga 140 deputetë, të zgjedhur për një periudhë 4 vjeçare. Kuvendi i zhvillon punimet e tij vjetore në dy sesione. Ai e organizon veprimtarinë e tij nëpërmjet Rregullores së Kuvendit, akt normativ që miratohet me shumicën e të gjithë anëtarëve të Kuvendit.',
  },
  {
    question: 'Procesi i Integrimit dhe fazat e tij!',
    answer:
      'Në një shtet demokratik pushteti buron nga populli. Deputetët, si përfaqësuesit e zgjedhur prej tij formojnë/ përbëjnë Kuvendin, i cili ushtron pushtetin ligjvënës, kontrollues dhe përfaqësues. Deputetët kanë përgjegjësinë të përfaqësojnë opinionin e zgjedhësve të tyre gjatë vendimmarrjes dhe debatit parlamentar që të shprehin interesat e zgjedhësve gjatë punimeve të Kuvendit. Kuvendi i Republikës së Shqipërisë është parlament një dhomësh i përbërë nga 140 deputetë, të zgjedhur për një periudhë 4 vjeçare. Kuvendi i zhvillon punimet e tij vjetore në dy sesione. Ai e organizon veprimtarinë e tij nëpërmjet Rregullores së Kuvendit, akt normativ që miratohet me shumicën e të gjithë anëtarëve të Kuvendit.',
  },
  {
    question: 'Nismat qytetare dhe si te propozoni nje te tille!',
    answer:
      'Në një shtet demokratik pushteti buron nga populli. Deputetët, si përfaqësuesit e zgjedhur prej tij formojnë/ përbëjnë Kuvendin, i cili ushtron pushtetin ligjvënës, kontrollues dhe përfaqësues. Deputetët kanë përgjegjësinë të përfaqësojnë opinionin e zgjedhësve të tyre gjatë vendimmarrjes dhe debatit parlamentar që të shprehin interesat e zgjedhësve gjatë punimeve të Kuvendit. Kuvendi i Republikës së Shqipërisë është parlament një dhomësh i përbërë nga 140 deputetë, të zgjedhur për një periudhë 4 vjeçare. Kuvendi i zhvillon punimet e tij vjetore në dy sesione. Ai e organizon veprimtarinë e tij nëpërmjet Rregullores së Kuvendit, akt normativ që miratohet me shumicën e të gjithë anëtarëve të Kuvendit.',
  },
  {
    question: 'Si te krijoni dhe dergoni nje peticion?',
    answer:
      'Në një shtet demokratik pushteti buron nga populli. Deputetët, si përfaqësuesit e zgjedhur prej tij formojnë/ përbëjnë Kuvendin, i cili ushtron pushtetin ligjvënës, kontrollues dhe përfaqësues. Deputetët kanë përgjegjësinë të përfaqësojnë opinionin e zgjedhësve të tyre gjatë vendimmarrjes dhe debatit parlamentar që të shprehin interesat e zgjedhësve gjatë punimeve të Kuvendit. Kuvendi i Republikës së Shqipërisë është parlament një dhomësh i përbërë nga 140 deputetë, të zgjedhur për një periudhë 4 vjeçare. Kuvendi i zhvillon punimet e tij vjetore në dy sesione. Ai e organizon veprimtarinë e tij nëpërmjet Rregullores së Kuvendit, akt normativ që miratohet me shumicën e të gjithë anëtarëve të Kuvendit.',
  },
  {
    question: 'Si te kontaktoni me deputetin tuaj?',
    answer:
      'Në një shtet demokratik pushteti buron nga populli. Deputetët, si përfaqësuesit e zgjedhur prej tij formojnë/ përbëjnë Kuvendin, i cili ushtron pushtetin ligjvënës, kontrollues dhe përfaqësues. Deputetët kanë përgjegjësinë të përfaqësojnë opinionin e zgjedhësve të tyre gjatë vendimmarrjes dhe debatit parlamentar që të shprehin interesat e zgjedhësve gjatë punimeve të Kuvendit. Kuvendi i Republikës së Shqipërisë është parlament një dhomësh i përbërë nga 140 deputetë, të zgjedhur për një periudhë 4 vjeçare. Kuvendi i zhvillon punimet e tij vjetore në dy sesione. Ai e organizon veprimtarinë e tij nëpërmjet Rregullores së Kuvendit, akt normativ që miratohet me shumicën e të gjithë anëtarëve të Kuvendit.',
  },
]

export default function Accordion() {
  return (
    <section className='pt-20 pb-12 bg-brandgray w-full'>
      <div className='screen flex flex-col gap-10'>
        <div className='text-center max-w-xl mx-auto flex flex-col gap-4 px-4 md:px-0'>
          <h2>MË SHUMË RRETH KUVENDIT</h2>
          <p className='opacity-60'>
            Instituti Parlamentar është një shërbim i Kuvendi të Shqipërisë dhe ju ndihmon duke ju dhënë më
            shumë informacion rreth aktivitetit të tij
          </p>
        </div>

        <div className='mt-10 mb-0 md:mb-10 px-6 max-w-5xl w-full mx-auto flex flex-col last:border-b-2 last:border-brandprimary'>
          {qaData.map((qa, i) => (
            <ListItem key={i} {...qa} open={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ListItem({ question, answer, open = false }) {
  const [isOpen, setIsOpen] = useState(open)
  return (
    <div className='border-t-2 border-brandprimary w-full'>
      <div
        className='group flex justify-between items-center py-6 md:py-8 w-full cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='text-3xl font-medium'>{question}</div>
        {!isOpen ? (
          <FaPlus size={16} className='mr-5 group-hover:rotate-180 transition-all duration-200 ease-linear' />
        ) : (
          <FaMinus
            size={16}
            className='mr-5 group-hover:rotate-180 transition-all duration-200 ease-linear'
          />
        )}
      </div>
      <div className={cn({ hidden: !isOpen })}>
        <p className='pb-8' dangerouslySetInnerHTML={{ __html: answer }}></p>
      </div>
    </div>
  )
}
