import { useContext } from "react";
import { ProjectsContext } from "../../context/Contexts";
import { getProjects, requestProjectRegister, requestProjectUpdate } from "../../helpers/projectsApi";
import { FormContainer, FormDiv100, FormDiv25 } from "../../styled/Form";
import { Title2 } from "../../styled/Titles";
import { Label } from "../../styled/Labels";
import { Input } from "../../styled/Inputs";
import { CancelButton, SaveButton } from "../../styled/Buttons";

const ProjectsForm = () => {
  const {
    projects,
    project,
    isUpdating,
    setIsUpdating,
    setProjects,
    setProject,
  } = useContext(ProjectsContext);

  const initialProject = ({
    id: '',
    title: '',
    description: '',
    projectUrl: '',
    snapshot: '',
    startDate: new Date().toLocaleDateString("pt-BR"),
    finishDate: new Date().toLocaleDateString("pt-BR"),
  });

  const handleChange = ({ target: { name, value } }) => {
    setProject({ ...project, [name]: value });
  };

  const handleDateChange = ({ target: { name, value } }) => {
    const brazilianDateFormat = value.split('/').reverse().join('-');
    value = brazilianDateFormat;
    setProject({ ...project, [name]: brazilianDateFormat });
  };

  const stopUpdating = () => {
    setIsUpdating(false);
    
    setProject(initialProject);
  };

  const sendRegisterRequest = async () => {
    requestProjectRegister(project)
    .then(() => {
      getProjects()
      .then(response => setProjects([...projects, response]));
    });
    stopUpdating();
  };

  const sendUpdateRequest = async (receivedId) => {
    requestProjectUpdate(receivedId, project)
    .then(() => {
      getProjects()
      .then(response => setProjects([...projects, response]));
    });
    stopUpdating();
  };

  return (
    <>
      <Title2>Cadastro de Projetos</Title2>
      <FormContainer action="POST">

        <FormDiv25>
          <Label htmlFor="input-title">
            Título:
          </Label>

          <Input
            id="input-title"
            name="title"
            type="text"
            value={project.title}
            onChange={ handleChange }
          />
        </FormDiv25>

        <FormDiv25>
          <Label htmlFor="input-projectUrl">
            URL do Projeto:
          </Label>

          <Input
            id="input-projectUrl"
            name="projectUrl"
            type="text"
            value={project.projectUrl}
            onChange={ handleChange }
          />
        </FormDiv25>

        <FormDiv25>
          <Label htmlFor="input-snapshot">
            Snapshot:
          </Label>
          
          <Input
            id="input-snapshot"
            name="snapshot"
            type="file"
            value={project.snapshot}
            onChange={ handleChange }
          />
        </FormDiv25>

        <FormDiv25>
          <Label htmlFor="input-startDate">
            Data de Início:
          </Label>

          <Input
            id="input-startDate"
            name="startDate"
            type="date"
            value={ project.startDate }
            onChange={ (event) => handleDateChange(event) }
          />
        </FormDiv25>

        <FormDiv25>
          <Label htmlFor="input-finishDate">
            Data de Conclusão:
          </Label>

          <Input
            id="input-finishDate"
            name="finishDate"
            type= "date"
            value={ project.finishDate }
            onChange={ (event) => handleDateChange(event) }
          />
        </FormDiv25>


        <FormDiv100>
          <Label htmlFor="input-description">
            Descrição:
          </Label>

          <Input
            id="input-description"
            name="description"
            type="text"
            value={project.description}
            onChange={ handleChange }
          />
        </FormDiv100>

        <FormDiv100>
          {
            !isUpdating
            ?
              (
                <SaveButton
                  type="button"
                  value="Salvar"
                  onClick={ sendRegisterRequest }
                />
              )
            :
              (
                <>
                  <SaveButton
                    type="button"
                    value="Alterar"
                    onClick={ () => sendUpdateRequest(project.id) }
                  />

                  <CancelButton
                    type="button"
                    value="Cancelar"
                    onClick={ stopUpdating }
                  />
                </>
              )
          }
        </FormDiv100>
      </FormContainer>
    </>
  );
};

export default ProjectsForm;
