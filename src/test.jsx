LegsData = []
  JanLegs = 0
  FebLegs = 0
  MarLegs = 0
  AprLegs = 0
  MayLegs = 0
  JunLegs = 0
  JulLegs = 0
  AugLegs = 0
  SepLegs = 0
  OctLegs = 0
  NovLegs = 0
  DecLegs = 0

  if (obj.date_created.slice(5, 7) === "01") {
                this.JanLegs += 1
              } else if (obj.date_created.slice(5, 7) === "02") {
                this.FebLegs += 1
              } else if (obj.date_created.slice(5, 7) === "03") {
                  this.MarLegs += 1
              } else if (obj.date_created.slice(5, 7) === "04") {
                  this.AprLegs += 1
              } else if (obj.date_created.slice(5, 7) === "05") {
                  this.MayLegs += 1
              } else if (obj.date_created.slice(5, 7) === "06") {
                  this.JunLegs += 1
              } else if (obj.date_created.slice(5, 7) === "07") {
                  this.JulLegs += 1
              } else if (obj.date_created.slice(5, 7) === "08") {
                  this.AugLegs += 1
              } else if (obj.date_created.slice(5, 7) === "09") {
                  this.SepLegs += 1
              } else if (obj.date_created.slice(5, 7) === "10") {
                  this.OctLegs += 1
              } else if (obj.date_created.slice(5, 7) === "11") {
                  this.NovLegs += 1
              } else if (obj.date_created.slice(5, 7) === "12") {
                  this.DecLegs += 1
              }

              this.LegsData.splice(0, 1, this.JanLegs)
              this.LegsData.splice(1, 1, this.FebLegs)
              this.LegsData.splice(2, 1, this.MarLegs)
              this.LegsData.splice(3, 1, this.AprLegs)
              this.LegsData.splice(4, 1, this.MayLegs)
              this.LegsData.splice(5, 1, this.JunLegs)
              this.LegsData.splice(6, 1, this.JulLegs)
              this.LegsData.splice(7, 1, this.AugLegs)
              this.LegsData.splice(8, 1, this.SepLegs)
              this.LegsData.splice(9, 1, this.OctLegs)
              this.LegsData.splice(10, 1, this.NovLegs)
              this.LegsData.splice(11, 1, this.DecLegs)