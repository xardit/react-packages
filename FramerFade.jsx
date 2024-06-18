import { motion } from 'framer-motion'

export const FadeInLeft = ({ children }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}

      // style={{ margin: '10px', padding: '20px', background: 'lightcoral', borderRadius: '5px' }}
    >
      {children}
    </motion.div>
  )
}

export const FadeInRight = ({ children }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export const FadeInUp = ({ children }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}
