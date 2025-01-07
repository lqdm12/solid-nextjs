import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categorias
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Eventos</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Notícias</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                Como Organizar Sua Rotina de Estudos para o Vestibular
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Leonard Mendonça
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Publicado em: Janeiro 7, 2025
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">Categoria: </span>
                    Events
                  </li>
                </ul>

                <div className="blog-details">


                  <p>Planejar seus estudos é o primeiro passo para alcançar a aprovação no vestibular. Neste artigo, trazemos dicas detalhadas para ajudar você a criar uma rotina personalizada e eficiente.</p>

                  <p>Se preparar para o vestibular exige mais do que dedicação: é necessário planejamento. Muitas vezes, a ansiedade e a quantidade de conteúdos podem atrapalhar o progresso, mas com uma rotina estruturada, tudo fica mais fácil.</p>

                  <p><strong>1. Defina Objetivos Realistas:</strong> Comece identificando as matérias que mais caem no vestibular e suas dificuldades. Por exemplo, na prova da Vunesp, as áreas de exatas têm grande peso. Dedique mais tempo a elas.</p>

                  <p><strong>2. Monte um Cronograma Personalizado:</strong> Utilize ferramentas como Google Calendar ou aplicativos de organização para mapear os dias da semana e definir horários específicos para cada matéria.</p>

                  <p><strong>3. Inclua Momentos de Revisão:</strong> Reserve pelo menos um dia na semana para revisar o que foi estudado. A repetição é essencial para a fixação do conteúdo.</p>

                  <p><strong>4. Faça Simulados Periódicos:</strong> Utilize materiais como as apostilas da NexusVest, que possuem questões organizadas por assunto. Dessa forma, você pode identificar seus pontos fortes e o que ainda precisa melhorar.</p>

                  <p><strong>5. Não Negligencie o Descanso:</strong> O sono é fundamental para consolidar o que foi aprendido. Estude, mas respeite seus limites.</p>

                  <p>Com essas dicas, sua jornada será muito mais produtiva e você estará um passo mais próximo do seu sonho.</p>


                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">
                    Resumo
                  </h3>

                  <p>
                    <strong>
                      Organize sua rotina de estudos com metas realistas, cronograma personalizado e períodos de revisão. Simulados e descanso também são essenciais para o sucesso no vestibular.
                    </strong>
                  </p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
