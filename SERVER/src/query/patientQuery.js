const QUERY = {
    SELECT_PATIENT: 'SELECT * FROM patients ORDER BY created_at DESC LIMIT 100',
    CREATE_PATIENT: "INSERT INTO patients (first_name, last_name, email, phone, diagnosis, adress, image_url) VALUES (?,?,?,?,?,?,?)"
}

export default QUERY;
