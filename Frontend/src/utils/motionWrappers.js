import { motion } from "framer-motion"

const MotionWrapper = ({ className, variants, viewport, children, key, onClick,...rest }) =>{
    return(
        <motion.div 
              variants={ variants }
              initial="hidden"
              whileInView={"show"}
              viewport={ viewport }
              className={ className }
              key={key}
              onClick={onClick}
              {...rest}
              >
                { children }
        </motion.div>
    )
}

export default MotionWrapper; 