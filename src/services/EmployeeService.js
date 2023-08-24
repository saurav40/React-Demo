import axios from 'axios'
 const BASE_URL="http://localhost:8181/api/v1/employees";
class EmployeeService
{
     getEmployee()
     {
        return axios.get(BASE_URL);
     }
     createEmployee(employee)
     {
        return axios.post(BASE_URL,employee);
     }
     getEmployeebyId(employeeId)
     {
        return axios.get(BASE_URL+'/'+employeeId);
     }
     updateEmployee(employee,employeeId)
     {
           return axios.put(employee,BASE_URL+'/'+employeeId);
     }
     deleteEmployee(employeeId)
     {
        return axios.delete(employeeId);
     }

}

export default new EmployeeService()