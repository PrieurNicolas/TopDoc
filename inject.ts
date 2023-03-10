// import { ActiviteHandler } from "./handler/activite.handler";
// import { AuthHandler } from "./handler/auth.handler";
import { BannedHandler } from "./handler/bannedhandler";
// import { CongeHandler } from "./handler/conge.handler";
// import { JourHandler } from "./handler/jour.handler";
import { LocationHandler } from "./handler/locationshandler";
// import { PlanningHandler } from "./handler/planning.handler";
// import { PlanningDayHandler } from "./handler/planningDay.handler";
// import { RendezVousHandler } from "./handler/rendezVous.handler";
// import { RoleHandler } from "./handler/role.handler";
import { UserHandler } from "./handler/userhandler";
// import { ActiviteRepository } from "./repository/activite.repository";
// import { AuthRepository } from "./repository/auth.repository";
import { BannedRepository } from "./repository/bannedrepository";
// import { CongeRepository } from "./repository/conge.repository";
// import { JourRepository } from "./repository/jour.repository";
import { LocationRepository } from "./repository/locationsrepository";
// import { PlanningRepository } from "./repository/planning.repository";
// import { PlanningDayRepository } from "./repository/planningDay.repository";
// import { RendezVousRepository } from "./repository/rendezVous.repository";
// import { RoleRepository } from "./repository/role.repository";
import { UserRepository } from "./repository/userrepository";
// import { ActiviteService } from "./services/Activite.service";
// import { AuthService } from "./services/Auth.service";
import { BannedService } from "./services/bannedservice";
// import { CongeService } from "./services/conge.service";
// import { JourService } from "./services/jour.service";
import { LocationService } from "./services/locationsservice";
// import { PlanningService } from "./services/planning.service";
// import { PlanningDayService } from "./services/PlanningDay.service";
// import { RendezVousService } from "./services/rendezVous.service";
// import { RoleService } from "./services/role.service";
import { UserService } from "./services/userservices";

// export const activiteHandler = new ActiviteHandler(new ActiviteService(new ActiviteRepository()))
export const bannedHandler = new BannedHandler(new BannedService(new BannedRepository()))
// export const congeHandler = new CongeHandler(new CongeService(new CongeRepository()))
// export const jourHandler = new JourHandler(new JourService(new JourRepository()))
export const locationHandler = new LocationHandler(new LocationService(new LocationRepository()))
// export const planningHandler = new PlanningHandler(new PlanningService(new PlanningRepository()))
// export const rdvHandler = new RendezVousHandler(new RendezVousService(new RendezVousRepository()))
// export const roleHandler = new RoleHandler(new RoleService(new RoleRepository()))
export const userHandler = new UserHandler(new UserService(new UserRepository()))
// export const authHandler = new AuthHandler(new AuthService(new AuthRepository()))

// export const planningDayHandler = new PlanningDayHandler(new PlanningDayService(new PlanningDayRepository()))