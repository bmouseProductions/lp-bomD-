import joelJota from '../../../../assets/images/joelJota.webp'
import Button from '../../../../components/Button/Button'

export default function SectionOne(){
    return (
        <section className="py-20">
            <div className="container mx-auto px-5  flex flex-col-reverse lg:flex-row gap-5">
                <div 
                    data-aos="fade-right" 
                    data-aos-duration="3000"
                    className='px-5 py-10 xl:px-10 xl:py-0 w-full flex flex-col lg:justify-center gap-5 lg:text-lg bg-gray-300 rounded-[30px] '
                >
                    <h1 className="hidden lg:block titleFont text-4xl xl:text-[55px] xl:leading-[50px] text-center md:text-start text-[#0062ff] ">
                        OFERECEMOS
                        DESCONTOS EXCLUSIVOS!
                    </h1>

                    <p className='text-center md:text-start'>
                        Em mais de <strong>15 mil estabelecimentos</strong>  parceiros em todo
                        país - e esse número continua crescendo a cada dia.
                    </p>

                    <p className='text-center md:text-start'>
                        <strong> Com o bomd+ você tem:</strong>
                    </p>
                        
                    <p className='text-center md:text-start'>
                        <strong> Até 70%</strong> de desconto em medicamentos;
                    </p>
                    
                    <p className='text-center md:text-start'>
                        <strong> Até 30%</strong> de desconto em exames, imagens e análises
                        clínicas;
                    </p>

                    <p className='text-center md:text-start'>
                        <strong> Até 70%</strong> de desconto em empresas de saúde e bem-estar.
                    </p>

                    <div className='mx-auto lg:mx-0 mt-5'>
                        <Button estilo='azul' />
                    </div>
                    
                </div>

                <div className='lg:w-1/2 flex flex-col items-center lg:items-end justify-center '>
                    <h1 className="lg:hidden mb-10 titleFont text-5xl text-center lg:text-start text-[#0062ff] ">
                        OFERECEMOS
                        DESCONTOS EXCLUSIVOS!
                    </h1>

                    <img 
                        data-aos="fade-up-left" 
                        data-aos-duration="3000"
                        src={joelJota} 
                        className='' 
                        alt="" 
                    />
                </div>
            </div>
        </section>
    )
}