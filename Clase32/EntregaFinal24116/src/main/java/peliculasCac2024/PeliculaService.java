package peliculasCac2024;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PeliculaService {

    private Conexion conexion;

    public PeliculaService() {
        this.conexion = new Conexion();
    }

    public List<Pelicula> getAllPeliculas() throws SQLException, ClassNotFoundException 
    {
        List<Pelicula> peliculas = new ArrayList<>();
        Connection con = conexion.getConnection();
        String sql = "SELECT * FROM peliculas";
        PreparedStatement ps = con.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();

        while (rs.next()) {
            Pelicula pelicula = new Pelicula(
                rs.getInt("id"),
                rs.getString("titulo"),                
                rs.getString("genero"),
                rs.getString("duracion"),
                rs.getString("director"),
                rs.getString("reparto"),
                rs.getString("sinopsis"),
                rs.getString("imagen")
            );
            peliculas.add(pelicula);
        }

        rs.close();
        ps.close();
        con.close();
        
        return peliculas;
    }

    public Pelicula getPeliculaById(int id) throws SQLException, ClassNotFoundException 
    {
        Pelicula pelicula = null;
        Connection con = conexion.getConnection();
        String sql = "SELECT * FROM peliculas WHERE id = ?";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setInt(1, id);
        ResultSet rs = ps.executeQuery();

        if (rs.next()) {
            pelicula = new Pelicula(
                rs.getInt("id"),
                rs.getString("titulo"),               
                rs.getString("genero"),
                rs.getString("duracion"),
                rs.getString("director"),
                rs.getString("reparto"),
                rs.getString("sinopsis"),
                rs.getString("imagen")
            );
        }

        rs.close();
        ps.close();
        con.close();

        return pelicula;
    }

    public void addPelicula(Pelicula pelicula) throws SQLException, ClassNotFoundException 
    {
        Connection con = conexion.getConnection();
        String sql = "INSERT INTO peliculas (titulo,  genero, duracion, director, reparto, sinopsis, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setString(1, pelicula.getTitulo());       
        ps.setString(2, pelicula.getGenero());
        ps.setString(3, pelicula.getDuracion());
        ps.setString(4, pelicula.getDirector());
        ps.setString(5, pelicula.getReparto());
        ps.setString(6, pelicula.getSinopsis());
        ps.setString(7, pelicula.getImagen());
        ps.executeUpdate();

        ps.close();
        con.close();
    }

    public void updatePelicula(Pelicula pelicula) throws SQLException, ClassNotFoundException 
    {
        Connection con = conexion.getConnection();
        String sql = "UPDATE peliculas SET titulo = ?,  genero = ?, duracion = ?, director = ?, reparto = ?, sinopsis = ?, imagen = ? WHERE id = ?";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setString(1, pelicula.getTitulo());      
        ps.setString(3, pelicula.getGenero());
        ps.setString(4, pelicula.getDuracion());
        ps.setString(5, pelicula.getDirector());
        ps.setString(6, pelicula.getReparto());
        ps.setString(7, pelicula.getSinopsis());
        ps.setString(8, pelicula.getImagen());
        ps.setInt(9, pelicula.getId());
        ps.executeUpdate();

        ps.close();
        con.close();
    }

    public void deletePelicula(int id) throws SQLException, ClassNotFoundException 
    {
        Connection con = conexion.getConnection();
        String sql = "DELETE FROM peliculas WHERE id = ?";
        PreparedStatement ps = con.prepareStatement(sql);
        ps.setInt(1, id);
        ps.executeUpdate();

        ps.close();
        con.close();
    }
}
