import { useEffect, useState } from "react";
import { getProjects } from "../helpers/projectsApi";
import Article from "../styled/Article";
import Loading from "./Loading";
import Content from "../styled/Content";
import { Title2, Title3 } from "../styled/Titles";
import { ProjectPicture } from "../styled/Pictures";
import { SimpleP } from "../styled/Paragraphs";
import businesFlow from '../assets/images/business-flow-920w.gif';

const ProjectsComponent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
    .then(data => setProjects(data));
  }, []);

  useEffect(() => {}, [projects]);

  if (!projects || projects.length === 0) {
    return (
      <Article>
        <Loading />
      </Article>
    );
  }

  return (
    projects.map((project) =>
      <Content key={project.id}>
        <Article
          margin={ '10px 0 5px 20px' }
          backgroundColor={ 'transparent' }
        >
          <Title2>{ project.title }</Title2>
        </Article>
        <Article
          width={ '75%' }
          margin={ 'auto' }
          backgroundColor={ 'transparent' }
        >
          <ProjectPicture
            src={ businesFlow }
            width={ '300px' }
          />
        </Article>

        <Article
          margin={ '0 0 10px 20px' }
          width={ '85%' }
          backgroundColor={ 'transparent' }
        >
          <SimpleP>{ project.description }</SimpleP>
        </Article>

        <Article
          margin={ '0 0 0 20px' }
          backgroundColor={ 'transparent' }
          width={ '85%' }
          display={ 'flex' }
        >
          <Title3>Data de início:</Title3>
          <SimpleP>
            {
              (project.startDate)
              ?
                new Date(project.startDate).toLocaleDateString()
              :
                'Ainda não iniciado.'
            }
          </SimpleP>
        </Article>
        
        <Article
          margin={ '0 0 0 20px' }
          backgroundColor={ 'transparent' }
          width={ '85%' }
          display={ 'flex' }
        >
          <Title3>Data de conclusão:</Title3>
          <SimpleP>
            { (project.finishDate)
              ?
                new Date(project.finishDate).toLocaleDateString()
              :
                'Em desenvolvimento.'
            }
          </SimpleP>
        </Article>

        <Article
          margin={ '0 0 0 20px' }
          backgroundColor={ 'transparent' }
          width={ '85%' }
          display={ 'flex' }
        >
          <Title3>Ferramentas usadas:</Title3>
          {
            (project.Stacks && project.Stacks.length > 0)
            ?
              project.Stacks
              .map((stack) => 
                <SimpleP key={stack.id}>
                  {stack.title}
                </SimpleP>
              )
            :
              'Ferramentas não definidas.'
          }
        </Article>
      </Content>
    )
  );
};

export default ProjectsComponent;
