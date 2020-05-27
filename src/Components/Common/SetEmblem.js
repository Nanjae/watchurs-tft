import emblem_challenger from "../../Assets/Emblems/emblem_challenger.png";
import emblem_grandmaster from "../../Assets/Emblems/emblem_grandmaster.png";
import emblem_master from "../../Assets/Emblems/emblem_master.png";
import emblem_diamond from "../../Assets/Emblems/emblem_diamond.png";
import emblem_platinum from "../../Assets/Emblems/emblem_platinum.png";
import emblem_gold from "../../Assets/Emblems/emblem_gold.png";
import emblem_silver from "../../Assets/Emblems/emblem_silver.png";
import emblem_bronze from "../../Assets/Emblems/emblem_bronze.png";
import emblem_iron from "../../Assets/Emblems/emblem_iron.png";
import emblem_unranked from "../../Assets/Emblems/emblem_unranked.png";

export default (tierNum) => {
  if (tierNum === 1) {
    return emblem_challenger;
  } else if (tierNum === 2) {
    return emblem_grandmaster;
  } else if (tierNum === 3) {
    return emblem_master;
  } else if (tierNum === 4) {
    return emblem_diamond;
  } else if (tierNum === 5) {
    return emblem_platinum;
  } else if (tierNum === 6) {
    return emblem_gold;
  } else if (tierNum === 7) {
    return emblem_silver;
  } else if (tierNum === 8) {
    return emblem_bronze;
  } else if (tierNum === 9) {
    return emblem_iron;
  } else {
    return emblem_unranked;
  }
};
