import img6 from '../assets/img6.jpg';


const AboutSection6 = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Tall image by the left */}
                    <div>
                        <img src={img6} className="w-full h-full object-cover rounded-lg"/>
                    </div>

                    {/* Text by the right */}
                    <div>
                        <h4 className=" font-bold mb-4">A brief history of the Church</h4>

                        <p className="leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus dolore unde nulla perferendis accusamus architecto, tenetur alias odit at sunt temporibus aut doloribus, consectetur dolorum? Fugiat deserunt, harum itaque natus tenetur quidem accusantium odit aliquid eveniet voluptatum dolor recusandae? Commodi, exercitationem. Aspernatur repudiandae corporis distinctio, vel est asperiores soluta repellat praesentium molestias tempore, dolor adipisci cumque quis voluptatum id! Magnam inventore et dolorum rem cumque maxime alias veritatis quidem.
                            <br /> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic sit fugiat tempore fuga inventore maiores praesentium tempora nam ducimus saepe, mollitia dolore numquam reprehenderit veritatis delectus sapiente? Velit placeat dolor eveniet ex nemo consequatur non quos veniam aliquam! Omnis, impedit. Odit officiis cumque quidem vitae et eum nobis, reiciendis, quas quam, repellendus ipsa autem?
                            <br /> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic sit fugiat tempore fuga inventore maiores praesentium tempora nam ducimus saepe, mollitia dolore numquam reprehenderit veritatis delectus sapiente? Velit placeat dolor eveniet ex nemo consequatur non quos veniam aliquam! Omnis, impedit. Odit officiis cumque quidem vitae et eum nobis, reiciendis, quas quam, repellendus ipsa autem?
                            <br /> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic sit fugiat tempore fuga inventore maiores praesentium tempora nam ducimus saepe, mollitia dolore numquam reprehenderit veritatis delectus sapiente? Velit placeat dolor eveniet ex nemo consequatur non quos veniam aliquam! Omnis, impedit. Odit officiis cumque quidem vitae et eum nobis, reiciendis, quas quam, repellendus ipsa autem?
                           
                        </p>
                    </div>

                </div>
                
            </div>
    )
}

export default AboutSection6;