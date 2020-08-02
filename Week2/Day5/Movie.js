class Movie{
    constructor(movieName, studio, ratings="PG") {
        this.movieName = movieName;
        this.studio = studio;
        this.ratings = ratings;
        this.getPG=function(){
            if(this.ratings=="PG"){
                movieArrList.push(this.movieName)
                return movirArrList;
            }
        }
    }
}

movieArrList=[];
var movie=new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie.getPG());
console.log(movieArrList);
