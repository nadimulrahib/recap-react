export default function UserCard({user}){

    const {name, username,email,address,phone,website,company} = user;
    console.log(user);

    return(
        <div className="card border-2 border-gray-400 p-4 rounded-lg w-96">
            <h4                      >Name: {name}</h4                      >
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
        </div>
    )
} 