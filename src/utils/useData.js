import data from './data.json';
import codeFormatter from './codeFormatter';

export default function useData() {
  const { name, title, skills, links, experience: experienceData, education } = data;
  
  const about = codeFormatter({ name, title, skills, links });
  const experience = codeFormatter({ experience: experienceData, education })

  return { about, experience };
}
