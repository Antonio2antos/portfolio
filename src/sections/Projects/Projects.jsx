import styles from './ProjectsStyles.module.css';
import abakos from '../../assets/abakos.png';
import taskapp from '../../assets/task-app(python).png';
import calculator from '../../assets/calculator.png';
import lojafreaky from '../../assets/loja-freaky.jpg';
import skaii from '../../assets/skaii.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={abakos}
          link="https://abakos.pt"
          h3="Abakos"
          p="Finance simulation application (currectly unavailable)"
        />
        <ProjectCard
          src={lojafreaky}
          link="https://formacaocesae.pt/WPEC/freakyshop/"
          h3="WooCommerce"
          p="Wordpress E-commerce"
        />
        <ProjectCard
          src={skaii}
          link="https://www.skaai.net/"
          h3="Skaii"
          p="Freelance job responsive design"
        />
        <ProjectCard
          src={taskapp}
          link="https://github.com/Antonio2antos/TaskApp?tab=readme-ov-file"
          h3="taskApp"
          p="To-Do List application"
        />
        <ProjectCard
          src={calculator}
          link="https://github.com/Antonio2antos/Calculator?tab=readme-ov-file"
          h3="Calculator"
          p="simple calculator Javascript"
        />
      </div>
    </section>
  );
}

export default Projects;
