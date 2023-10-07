export const pageAnimation={
    hidden:{
        opacity:0,
        y:300
    },
    show:{
        opacity:1,
       
        y:0,
        transition: {
            duration:0.5,
            when:"beforeChildren",
            staggerChildren:0.5
        }
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:0.6
        }
    }
}

export const titleAnimations={
    hidden:{
        opacity:0,
        y:100
    },
    show:{
        opacity:1,
        y:0,
        transition:{duration:0.75,ease:"easeOut"}
    }
}

export const fadeAnim={
    hidden:{
        opacity:0
    },
    show:{
        opacity:1
        ,transition:{duration:0.75 , ease:"easeOut"}
    }
}
export const photoAnim={
    hidden:{
        scale:1.5,
        opacity:0
    },
    show:{
        scale:1,
        opacity:1,
        transition:{
            duration:0.75,
            ease:"easeOut"
        }
    }
}
export const lineAnimation={
    hidden:{
        width:0
    },
    show:{
        width:"100%",
        transition:{
            duration:1,
            ease:"easeOut"
        }
    }
}

export const frameAnim={
    hidden:{
        x:"-130%",
        skew:"45deg"
    },
    show:{
        x:"100%",
        skew:"0deg",
        transition:{
            duration:0.75,
            ease:"easeOut"
        }
    }
}