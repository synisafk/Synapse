import config from "../config"

export const openGUI = register("command", () => {
    return config.openGUI()
})
.setName("synapse")
.setAliases(["sy", "syn", "synapse gui"])
