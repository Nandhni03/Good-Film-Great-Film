export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: 
                    'Bearer 12e033d82c64842d326f3d487e6997cd',
            },
        }
    )

    console.log(res.json());
      
    const data = await res.json();
    return res.json();
    console.log(data);
    return data;
}