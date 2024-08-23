import React from 'react'
import { useParams } from 'react-router-dom';

function UserDetails({ getUser }) {
    const { login } = useParams();
  
    // `login` parametresini kullanarak gerekli işlemleri yapabilirsiniz
    React.useEffect(() => {
      getUser(login);
    }, [login, getUser]);
  
    return (
      <div>
        <h2>User Details for {login}</h2>
        {/* Diğer içerikler */}
      </div>
    );
  }
  

export default UserDetails;
