import config from "../GUI/config"

export const openGUI = register("command", () => {
    return config.openGUI()
})
.setName("synapse")
.setAliases(["sy", "syn", "synapse gui"])
