import { celebrate } from "celebrate";
import { Router } from "express";
import { isUserLogged } from "../../middlewares/isUserLogged";
import {
  allCandidatesSchema,
  createCandidateSchema,
  deleteCandidateSchema,
  editCandidateSchema,
  singleCandidateSchema,
} from "../../middlewares/schemas/candidates";
import { candidatesController } from "./candidatesController";

export function candidatesRoutes() {
  const router = Router();

  const {
    getCandidateById,
    getAllCandidates,
    createCandidate,
    updateCandidate,
    deleteCandidate,
    getPageCandidates,
    getByUsername
  } = candidatesController();

  router.get("/all", isUserLogged, getAllCandidates);
  router.get("/page", isUserLogged, getPageCandidates);
  router.get(
    "/getByUsername/:username",
    isUserLogged,
    getByUsername
  );
  router.get(
    "/get/:candidate_id",
    isUserLogged,
    celebrate(singleCandidateSchema),
    getCandidateById
  );
  router.post(
    "/create",
    isUserLogged,
    celebrate(createCandidateSchema),
    createCandidate
  );
  router.put(
    "/edit",
    isUserLogged,
    celebrate(editCandidateSchema),
    updateCandidate
  );
  router.delete(
    "/delete",
    isUserLogged,
    celebrate(deleteCandidateSchema),
    deleteCandidate
  );

  return router;
}
