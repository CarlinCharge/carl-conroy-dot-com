import {ReactElement} from  'react'

interface Props {
    title: string
}

const increment = (num: number): number => {
    const newNum = num +1
    return newNum 

}

const Project = ({title}: Props): ReactElement => {
    return (
        <div>
        <div>{title}</div>
        <div>{increment(1)}</div>
        </div>
       

    )
}

export default Project;