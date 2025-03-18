import express from 'express';
import mongoose, { connect } from 'mongoose';
import bodyParser from 'body-parser';


const uri = "mongodb+srv://ADMIN:Rh9MotZGa5QxPPDh@alcrispymongo.d1ros.mongodb.net/Shared_Initiative?retryWrites=true&w=majority&appName=AlCrispyMongo";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
connect(uri, clientOptions);

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true }));

const sessionSchema = new mongoose.Schema({
    sessionId: { type: String, required: true },
    characters: [
        {
            name: { type: String, required: true },
            i_mod: { type: Number, required: true },
            initiative: { type: Number, required: true },
            ca: { type: Number, required: true },
            type: { type: String, required: true },
            image: { type: String, required: true }
        }
    ],
    roundOfCombat: { type: Number, required: true }
}, { collection: 'sessions' });

const SessionModel = mongoose.model('SessionModel', sessionSchema);

app.get('/', (request, response) => {
    response.send('Hello World from Node.js server!');
});

app.post('/api/v1/sessions', async (request, response) => {
    try {
        const sessionId = crypto.randomUUID()
        const { characters, roundOfCombat } = request.body;
        const InitiativeSession = new SessionModel({ sessionId, characters, roundOfCombat });
        await InitiativeSession.save();
        response.status(201).json({ message: 'Session created successfully', session: InitiativeSession });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

app.get('/api/v1/sessions/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const session = await SessionModel.findOne({ sessionId: id });
        if (!session) {
            return response.status(404).json({ message: 'Session not found' });
        }
        response.json(session);
      } catch (error) {
        response.status(500).json({ error: error.message });
      }
});

app.delete('/api/v1/sessions/:id', async (request, response) => {
    try {
      const id = request.params.id;
      const deletedUser = await SessionModel.findOneAndDelete({ sessionId: id });
      if (!deletedUser) {
        return response.status(404).json({ message: 'Session not found' });
      }
      response.json({ message: 'Session deleted successfully', deletedUser });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

app.put('/api/v1/sessions/:id', async (request, response) => {
    try {
      const id = request.params.id;
      const updateData = request.body; 
  
      const updatedSession = await SessionModel.findOneAndUpdate(
        { sessionId: id }, // Find user by sessionId
        { $set: updateData }, // Update the session data
        { new: true } // Return the updated session document
      );
      if (!updatedSession) {
        return response.status(404).json({ message: 'Session not found' });
      }
      response.json({ message: 'Session updated successfully', updatedSession });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
  });

 app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});