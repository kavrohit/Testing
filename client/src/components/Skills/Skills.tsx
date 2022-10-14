import { SkillProps } from "./Skills.types";

export const Skills = ( props: SkillProps) => {
console.log('-------props',props)
  const { skills } = props;

  return(
    <>
    <ul>
      {
       skills && skills.map((skill) => {
        return <li key ={skill}>{skill}</li>;
      })
      }
    </ul>
    </>
  );
}