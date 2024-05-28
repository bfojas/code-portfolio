import data from './data.json';
import codeFormatter from './codeFormatter';

export default function useData() {
  const {
    name,
    about,
    skills,
    links,
    experience,
    education
  } = data;

  return {
    about: codeFormatter({ name, about, skills, links }),
    experience: codeFormatter({ experience, education })
  };
}
