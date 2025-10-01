import { motion } from "framer-motion"

const MotionWrapper = ({ className, variants, viewport, children, key }) =>{
    return(
        <motion.div 
              variants={ variants }
              initial="hidden"
              whileInView={"show"}
              viewport={ viewport }
              className={ className }
              key={key}
              >
                { children }
        </motion.div>
    )
}

export default MotionWrapper; 