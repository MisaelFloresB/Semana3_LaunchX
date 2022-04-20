const MissionCommander = require('./../app/missionCommander')

describe("Unit tests for Mission Commander Class", () => {
    test(' 1) Create a mission commander objet', () => {
      const myMissionCommander = new MissionCommander("Abiu")
      expect(myMissionCommander.name).toBe("Abiu");
    });
  })
  