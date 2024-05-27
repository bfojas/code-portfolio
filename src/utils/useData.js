import data from './data.json';
import codeFormatter from './codeFormatter';

export default function useData() {
  const { name, title, skills, links, experience: experiencedData, education } = data;
  
  const about = codeFormatter({ name, title, skills, links });
  const experience = codeFormatter({ experiencedData, education })

  return { about, experience };
}
