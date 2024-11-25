import React from 'react';

const Page = ({params}) => {

    const Text = ({ text }) => {
        const chunks = text.split(' ').reduce((acc, word, index) => {
            const chunkIndex = Math.floor(index / 58);
            acc[chunkIndex] = acc[chunkIndex] || [];
            acc[chunkIndex].push(word);
            return acc;
        }, []);

        return (
            <div className={"w-full p-4  grid grid-cols-2 overflow-y-scroll h-[800px]"}>
                {chunks.map((chunk, index) => (
                    <p key={index} className="mb-4 mt-4 text-pretty text-left w-[600px]">
                        {chunk.join(' ')}
                    </p>
                ))}
            </div>
        );
    };

    return (
        <div className={"h-full p-4 w-full text-[#E2E2E2]"}>
            <div className={"flex flex-row justify-between h-fit items-center"}>
                <div>
                    <h1 className={"font-bold text-5xl"}># Temel Kavramlar</h1>
                    <p>Shared by Hacı Mert Gökhan</p>
                </div>
                <h5>{new Date().toLocaleDateString()}</h5>
            </div>
            <div>
                <Text text={
                    "Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend metus dolor quis ut condimentum lacinia urna. Cursus ligula natoque massa id ad interdum? Fringilla tempor cursus dui nec ad. Aliquet nisl eleifend dolor at diam tincidunt? Ut tempus litora accumsan phasellus curae interdum orci habitant. Interdum sodales vestibulum maecenas; magna faucibus lacinia. Ullamcorper integer nam; mattis ac feugiat hendrerit tincidunt. Morbi blandit ornare ipsum senectus; mollis proin iaculis pretium habitasse. Class ac massa per tempus montes; a integer tristique, Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend metus dolor quis ut condimentum lacinia urna. Cursus ligula natoque massa id ad interdum? Fringilla tempor cursus dui nec ad. Aliquet nisl eleifend dolor at diam tincidunt? Ut tempus litora accumsan phasellus curae interdum orci habitant. Interdum sodales vestibulum maecenas; magna faucibus lacinia. Ullamcorper integer nam; mattis ac feugiat hendrerit tincidunt. Morbi blandit ornare ipsum senectus; mollis proin iaculis pretium habitasse. Class ac massa per tempus montes; a integer tristique." +
                    "Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend metus dolor quis ut condimentum lacinia urna. Cursus ligula natoque massa id ad interdum? Fringilla tempor cursus dui nec ad. Aliquet nisl eleifend dolor at diam tincidunt? Ut tempus litora accumsan phasellus curae interdum orci habitant. Interdum sodales vestibulum maecenas; magna faucibus lacinia. Ullamcorper integer nam; mattis ac feugiat hendrerit tincidunt. Morbi blandit ornare ipsum senectus; mollis proin iaculis pretium habitasse. Class ac massa per tempus montes; a integer tristique, Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend metus dolor quis ut condimentum lacinia urna. Cursus ligula natoque massa id ad interdum? Fringilla tempor cursus dui nec ad. Aliquet nisl eleifend dolor at diam tincidunt? Ut tempus litora accumsan phasellus curae interdum orci habitant. Interdum sodales vestibulum maecenas; magna faucibus lacinia. Ullamcorper integer nam; mattis ac feugiat hendrerit tincidunt. Morbi blandit ornare ipsum senectus; mollis proin iaculis pretium habitasse. Class ac massa per tempus montes; a integer tristique." +
                    "Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend metus dolor quis ut condimentum lacinia urna. Cursus ligula natoque massa id ad interdum? Fringilla tempor cursus dui nec ad. Aliquet nisl eleifend dolor at diam tincidunt? Ut tempus litora accumsan phasellus curae interdum orci habitant. Interdum sodales vestibulum maecenas; magna faucibus lacinia. Ullamcorper integer nam; mattis ac feugiat hendrerit tincidunt. Morbi blandit ornare ipsum senectus; mollis proin iaculis pretium habitasse. Class ac massa per tempus montes; a integer tristique, Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend metus dolor quis ut condimentum lacinia urna. Cursus ligula natoque massa id ad interdum? Fringilla tempor cursus dui nec ad. Aliquet nisl eleifend dolor at diam tincidunt? Ut tempus litora accumsan phasellus curae interdum orci habitant. Interdum sodales vestibulum maecenas; magna faucibus lacinia. Ullamcorper integer nam; mattis ac feugiat hendrerit tincidunt. Morbi blandit ornare ipsum senectus; mollis proin iaculis pretium habitasse. Class ac massa per tempus montes; a integer tristique." +
                    "Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend metus dolor quis ut condimentum lacinia urna. Cursus ligula natoque massa id ad interdum? Fringilla tempor cursus dui nec ad. Aliquet nisl eleifend dolor at diam tincidunt? Ut tempus litora accumsan phasellus curae interdum orci habitant. Interdum sodales vestibulum maecenas; magna faucibus lacinia. Ullamcorper integer nam; mattis ac feugiat hendrerit tincidunt. Morbi blandit ornare ipsum senectus; mollis proin iaculis pretium habitasse. Class ac massa per tempus montes; a integer tristique, Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend metus dolor quis ut condimentum lacinia urna. Cursus ligula natoque massa id ad interdum? Fringilla tempor cursus dui nec ad. Aliquet nisl eleifend dolor at diam tincidunt? Ut tempus litora accumsan phasellus curae interdum orci habitant. Interdum sodales vestibulum maecenas; magna faucibus lacinia. Ullamcorper integer nam; mattis ac feugiat hendrerit tincidunt. Morbi blandit ornare ipsum senectus; mollis proin iaculis pretium habitasse. Class ac massa per tempus montes; a integer tristique.\n"
                }/>
            </div>

        </div>
    );
};

export default Page;