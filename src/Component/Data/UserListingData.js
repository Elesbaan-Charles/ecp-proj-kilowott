import UserListingStructure from '../Structure/UserListingStructure';


function UserListingData(props){
    return (
    <div style = {{marginTop : "100px"}}>
        {
            props.data.map((data) => {
                return <UserListingStructure 
                id = {data.id}
                name = {data.name}
                username = {data.username}
                />
            })
        }
    </div>
    );
}
export default UserListingData;