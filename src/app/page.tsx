import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* Home Content */}
      <section className="home-content1 py-16 bg-blue-500 text-white text-center">
        <h1 className="animated-text text-4xl mb-2"><span>Asalaamualikum</span></h1>
        <h1 className="animated-text text-3xl mb-2"><span>Welcome to the</span></h1>
        <h1 className="animated-text text-3xl mb-2"><span>Personal Portfolio Profile</span></h1>
        <h3 className="text-animation text-xl">I'm a <span>Youtuber</span></h3>
        <p>As a developer, I'm passionate about building innovative solutions that make a real impact. 
        </p> 
        <a href="#" className="btn mt-4 inline-block bg-white text-blue-500 px-6 py-2 rounded">Hire Me</a>
      </section>

      {/* About Section */}
      <section id="about" className="about py-16 bg-gray-100 text-center">
        <h2 className="heading text-3xl font-bold mb-6">About <span>Me</span></h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          As a passionate and driven developer, I specialize in TypeScript, HTML, CSS, and Python. My journey in technology has been marked by a deep commitment to crafting elegant and functional code.
        </p>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 mt-4">
          In addition to my technical skills, I am actively involved in the Governor Sindh IT Initiative, where I contribute as a Teacher Assistant and Senior Student.
        </p>
        <a href="#" className="btn mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded">Read More</a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects py-16 bg-white text-center">
        <h2 className="heading text-3xl font-bold mb-6">My <span>Projects</span></h2>
        <div className="projects-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'First Battle Game CLI', link: '#' },
            { title: 'Guessing Number', link: '#' },
            { title: 'Currency Converter', link: '#' },
            { title: 'Student Management', link: '#' },
            { title: 'Todo List', link: '#' },
            { title: 'Word Counter', link: '#' },
          ].map((project) => (
            <div key={project.title} className="project-box border p-4 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded">Visit
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
